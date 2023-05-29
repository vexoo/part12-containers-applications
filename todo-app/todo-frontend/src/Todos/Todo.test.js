import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Todo from './Todo';

describe('Todo component', () => {
  const todo = { id: 1, text: 'Sample Todo', done: false };
  const deleteTodo = jest.fn();
  const completeTodo = jest.fn();

  beforeEach(() => {
    render(<Todo todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} />);
  });

  test('renders todo text', () => {
    const todoText = screen.getByText('Sample Todo');
    expect(todoText).toBeInTheDocument();
  });
});