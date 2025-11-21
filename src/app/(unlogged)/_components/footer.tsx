import Link from 'next/link';


export function Footer() {
  return (
    <footer className='bg-gray-800 text-white py-8'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='mb-4 md:mb-0'>
            <Link className='text-2xl font-bold text-white' href='/'>
              Odonto<span className='text-emerald-500'>PRO</span>
            </Link>
            <p className='text-sm text-gray-400 mt-2'>
              OdontoPRO. Todos os direitos reservados © {new Date().getFullYear()}{' '}
            </p>
          </div>
          <div className='flex space-x-6'>
            <Link href='#' className='text-gray-300 hover:text-white'>
              Termos de Serviço
            </Link>
            <Link href='#' className='text-gray-300 hover:text-white'>
              Política de Privacidade
            </Link>
            <Link href='#' className='text-gray-300 hover:text-white'>
              Contato
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
