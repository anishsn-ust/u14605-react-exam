import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import TransferList from './TransferList'

describe('Product page with add to cart', () => {
  it('renders the Transfer list with left item and right item empty', () => {
    const { container } = render(<TransferList />);
    const leftItem1 = container.querySelector('.label-left-list-0');
    expect(leftItem1).toBeInTheDocument();
    expect(leftItem1).toHaveTextContent('HTML');
    const leftItem2 = container.querySelector('.label-left-list-1');
    expect(leftItem2).toBeInTheDocument();
    expect(leftItem2).toHaveTextContent('Javascript');
    const leftItem3 = container.querySelector('.label-left-list-2');
    expect(leftItem3).toBeInTheDocument();
    expect(leftItem3).toHaveTextContent('Typescript');
    const leftItem4 = container.querySelector('.label-left-list-3');
    expect(leftItem4).toBeInTheDocument();
    expect(leftItem4).toHaveTextContent('CSS');
    const leftItem5 = container.querySelector('.label-left-list-4');
    expect(leftItem5).toBeInTheDocument();
    expect(leftItem5).toHaveTextContent('React');
    const leftItem6 = container.querySelector('.label-left-list-5');
    expect(leftItem6).toBeInTheDocument();
    expect(leftItem6).toHaveTextContent('Remix');
    const leftItem7 = container.querySelector('.label-left-list-6');
    expect(leftItem7).toBeInTheDocument();
    expect(leftItem7).toHaveTextContent('Next');
    const leftItem8 = container.querySelector('.label-left-list-7');
    expect(leftItem8).toBeInTheDocument();
    expect(leftItem8).toHaveTextContent('Angular');
    
  }),
   it('Click an item and on select > check it moves from left to right & then click < to check it moves from right to left', () => {
    const { container } =  render(<TransferList />);
    const leftItem1 = container.querySelector('.label-left-list-0');
    expect(leftItem1).toBeInTheDocument();
    expect(leftItem1).toHaveTextContent('HTML');
    const firstLeftCheckBox  = screen.getByTestId('checkbox-left-list-0');
    fireEvent.click(firstLeftCheckBox);
    const transferTo = screen.getByTestId('transfer-to');
    fireEvent.click(transferTo);
    const newleftItem1 = container.querySelector('.label-left-list-0');
    expect(newleftItem1).not.toHaveTextContent('HTML');
      const newRightItem1 = container.querySelector('.label-right-list-0');
    expect(newRightItem1).toBeInTheDocument();
    expect(newRightItem1).toHaveTextContent('HTML');
     const firstRightCheckBox  = screen.getByTestId('checkbox-right-list-0');
    fireEvent.click(firstRightCheckBox);
     const transferFrom = screen.getByTestId('transfer-from');
    fireEvent.click(transferFrom);
    const newLeftItem2 = container.querySelector('.label-left-list-7');
    expect(newLeftItem2).toBeInTheDocument();
    expect(newLeftItem2).toHaveTextContent('HTML');
    
   
   })
   
})