import Button from "@/components/Button";
import Input from "@/components/Input";
import Link from "next/link";

export default function Registro() {
  return (
    <main className='flex min-h-screen flex-col md:flex-row items-center justify-between'>
      <div className='hidden md:block bg-emerald-500 w-full min-h-screen'>
        1
      </div>
      <div className='bg-slate-900 w-full min-h-screen grid place-content-center'>
        <form className="w-80">
          <label htmlFor="name" className='block mt-4'>Nome</label>
          <Input type="text" name="name" id="name" required />
          <label htmlFor="email" className='block mt-4'>Email</label>
          <Input type="text" name="email" id="email" required />
          <label htmlFor="password" className='block mt-4'>Senha</label>
          <Input type="password" name="password" id="password" required />
          <label htmlFor="confirmPassword" className='block mt-4'>Confirmar Senha</label>
          <Input type="password" name="confirmPassword" id="confirmPassword" />
          <Button>Entrar</Button>
          <p className="mt-4">
            Já possui uma conta?
            {' '}
            <Link
              href='/login'
              className="text-emerald-500 hover:text-emerald-600 transition-colors"
            >
              Entre agora
            </Link>
          </p>
        </form>
      </div>
    </main>
  )
}