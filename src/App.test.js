import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the hero with name, role and every portfolio section', () => {
  render(<App />);

  expect(
    screen.getByRole('heading', { level: 3, name: 'Shadrack Kioko' })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('heading', {
      level: 1,
      name: /Hi, I’m Shadrack/i,
    })
  ).toBeInTheDocument();

  [
    'Professional Experience',
    'Core Competencies',
    'Featured Initiatives',
    'Education',
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
    expect(screen.getByText(new RegExp(company, 'i'))).toBeInTheDocument();
  });
});

test('exposes real contact links', () => {
  render(<App />);

  const linkHrefs = (name) =>
    screen
      .getAllByRole('link', { name })
      .map((link) => link.getAttribute('href'));

  expect(linkHrefs('LinkedIn')[0]).toContain(
    'linkedin.com/in/shadrack-kioko'
  );
  expect(linkHrefs('GitHub')[0]).toContain('github.com/kiokoshedy');
  expect(linkHrefs('Email')).toContain('mailto:shkmusembi@gmail.com');
  expect(linkHrefs('Phone')).toContain('tel:+254701841549');
});
