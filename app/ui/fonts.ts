
import {Lusitana, Montserrat} from 'next/font/google'

export const montserrat = Montserrat({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display:'swap',
    fallback: ['Arial', 'sans-serif'],
  })
  export const lusitana = Lusitana({
    weight: [ '400', '700'],
    subsets: ['latin'],
    display:'swap',
    fallback: ['Arial', 'sans-serif'],
  })