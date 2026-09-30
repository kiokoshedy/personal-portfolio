import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { draftMailto } from './components/Contact';

test('renders the hero with name, role and every portfolio section', () => {
  render(<App />);

  expect(
    screen.getByRole('heading', { level: 3, name: 'Shadrack Kioko' })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { level: 1, name: /Hi, I’m Shadrack/i })
  ).toBeInTheDocument();

  [
    'Professional Experience',
    'Core Competencies',
    'Featured Initiatives',
    'Education',
    'Certifications & References',
    'Get In Touch',
  ].forEach((heading) => {
    expect(
      screen.getByRole('heading', { level: 2, name: heading })
    ).toBeInTheDocument();
  });
});

test('lists the three professional roles', () => {
  render(<App />);

  ['Britam', 'Littlepay', 'Data Integrated Ltd'].forEach((company) => {
    expect(screen.getAllByText(new RegExp(company, 'i')).length).toBeGreaterThan(0);
  });
});

test('exposes real contact links', () => {
  render(<App />);

  const linkHrefs = (name) =>
    screen
      .getAllByRole('link', { name })
      .map((link) => link.getAttribute('href'));

  expect(linkHrefs('LinkedIn')[0]).toContain('linkedin.com/in/shadrack-kioko');
  expect(linkHrefs('GitHub')[0]).toContain('github.com/kiokoshedy');
  expect(linkHrefs('Email')).toContain('mailto:shkmusembi@gmail.com');
  expect(linkHrefs('Phone')).toContain('tel:+254701841549');
});

test('toggles between dark and light mode', () => {
  render(<App />);

  const toggle = screen.getAllByRole('button', {
    name: /switch to (light|dark) mode/i,
  })[0];
  const before = document.documentElement.getAttribute('data-theme');
  expect(['light', 'dark']).toContain(before);

  fireEvent.click(toggle);

  const after = document.documentElement.getAttribute('data-theme');
  expect(after).not.toBe(before);
  expect(['light', 'dark']).toContain(after);
  expect(
    screen.getAllByRole('button', { name: /switch to (light|dark) mode/i })[0]
  ).toBeInTheDocument();
});

test('opens a printable CV view and returns to the site', () => {
  render(<App />);

  fireEvent.click(screen.getByRole('button', { name: 'CV' }));

  const cv = screen.getByRole('heading', { level: 1, name: 'Shadrack Kioko' });
  expect(cv).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { level: 2, name: /core competencies/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { level: 2, name: /professional experience/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('button', { name: /save this cv as pdf/i })
  ).toBeInTheDocument();
  expect(window.location.search).toBe('?view=cv');

  fireEvent.click(screen.getByRole('button', { name: /back to site/i }));

  expect(
    screen.getByRole('heading', { level: 1, name: /Hi, I’m Shadrack/i })
  ).toBeInTheDocument();
  expect(window.location.search).toBe('');
});

const fillContactForm = () => {
  fireEvent.change(screen.getByLabelText(/first name/i, { selector: 'input' }), {
    target: { value: 'heha' },
  });
  fireEvent.change(screen.getByLabelText(/last name/i, { selector: 'input' }), {
    target: { value: 'Tester' },
  });
  fireEvent.change(screen.getByLabelText(/email/i, { selector: 'input' }), {
    target: { value: 'test@example.com' },
  });
  fireEvent.change(screen.getByLabelText(/message/i, { selector: 'textarea' }), {
    target: { value: 'heha' },
  });
  fireEvent.click(screen.getByRole('button', { name: /send message/i }));
};

const withMockedFetch = async (mock, assertions) => {
  const realFetch = global.fetch;
  global.fetch = mock;

  try {
    render(<App />);
    fillContactForm();
    await assertions();
  } finally {
    global.fetch = realFetch;
  }
};

test('opens a prefilled mail draft when the contact service is unreachable', async () => {
  await withMockedFetch(
    jest.fn().mockRejectedValue(new Error('network down')),
    async () => {
      expect(
        await screen.findByText(/prefilled message in your mail app/i)
      ).toBeInTheDocument();
      expect(screen.getByText(/email me directly at/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /send message/i })).toBeEnabled();
    }
  );
});

test('opens a prefilled mail draft when the service reports it is not configured', async () => {
  await withMockedFetch(
    jest.fn().mockResolvedValue({
      ok: false,
      status: 503,
      json: async () => ({ code: 503, message: 'Contact service is not configured.' }),
    }),
    async () => {
      expect(
        await screen.findByText(/contact service is not configured/i)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/prefilled message in your mail app/i)
      ).toBeInTheDocument();
    }
  );
});

test('keeps visitor-fixable errors inline without opening a draft', async () => {
  await withMockedFetch(
    jest.fn().mockResolvedValue({
      ok: false,
      status: 429,
      json: async () => ({ code: 429, message: 'Too many messages sent. Try again later.' }),
    }),
    async () => {
      expect(
        await screen.findByText(/too many messages sent/i)
      ).toBeInTheDocument();
      expect(screen.queryByText(/mail app/i)).not.toBeInTheDocument();
    }
  );
});

test('renders competency proficiency meters accessibly', () => {
  render(<App />);

  const meters = screen.getAllByRole('progressbar');
  expect(meters).toHaveLength(7);

  const architecture = screen.getByRole('progressbar', {
    name: 'Architecture proficiency',
  });
  expect(Number(architecture.getAttribute('aria-valuenow'))).toBeGreaterThan(0);
  expect(screen.getByText('90%')).toBeInTheDocument();
});

test('composes a prefilled mail draft from the form details', () => {
  const mailto = draftMailto({
    firstName: 'Heha',
    lastName: 'Tester',
    email: 'test@example.com',
    phone: '+254 701 841 549',
    message: 'heha\nsecond line',
  });

  expect(mailto.startsWith('mailto:shkmusembi@gmail.com?')).toBe(true);

  const params = new URLSearchParams(mailto.split('?')[1]);
  expect(params.get('subject')).toBe('Portfolio enquiry from Heha Tester');
  expect(params.get('body')).toContain('Name: Heha Tester');
  expect(params.get('body')).toContain('Email: test@example.com');
  expect(params.get('body')).toContain('Phone: +254 701 841 549');
  expect(params.get('body')).toContain('heha\nsecond line');
  expect(mailto).toContain('heha%0Asecond%20line');
  expect(mailto).toContain('%2B254%20701%20841%20549');

  const fallback = draftMailto({ firstName: 'A', lastName: 'B', email: 'c@d.e', phone: '', message: 'hi' });
  expect(new URLSearchParams(fallback.split('?')[1]).get('body')).toContain('Phone: Not provided');
});
