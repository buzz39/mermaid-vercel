import { expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import MermaidReaderApp from '../app/page'

// Mock mermaid
vi.mock('mermaid', () => ({
  default: {
    initialize: vi.fn(),
    render: vi.fn().mockResolvedValue({ svg: '<svg>mock</svg>' }),
  },
}));

// Mock URL.createObjectURL
global.URL.createObjectURL = vi.fn();

test('MermaidReaderApp renders correctly', () => {
  render(<MermaidReaderApp />)

  // Check for title
  expect(screen.getByText('Mermaid Live Editor')).toBeDefined()

  // Check for textarea
  expect(screen.getByPlaceholderText('Paste your Mermaid diagram code here...')).toBeDefined()

  // Check for render button
  expect(screen.getByRole('button', { name: 'Render' })).toBeDefined()
})
