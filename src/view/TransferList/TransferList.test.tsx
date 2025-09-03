import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import TransferList from './TransferList'

describe('Product page with add to cart', () => {
  it('renders the Product component with product cards', async() => {
    const { container } = render(<TransferList />);
    // await waitFor(() => {
    
       const titleElement = container.querySelector('.label-left-list-0');
         expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent('HTML');
    // })
    
  })
   

})