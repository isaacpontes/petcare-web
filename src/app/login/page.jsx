import Button from "@/components/Button";
import Input from "@/components/Input";
import Link from "next/link";

export default function Login() {
  return (
    <main className='flex min-h-screen flex-col md:flex-row items-center justify-between'>
      <div className='hidden md:block bg-emerald-500 w-full min-h-screen'>
        1
      </div>
      <div className='bg-slate-900 w-full min-h-screen grid place-content-center'>
        <form className="w-80">
          <label htmlFor="email" className='block mt-4'>Email</label>
          <Input type="text" name="email" id="email" />
          <label htmlFor="password" className='block mt-4'>Senha</label>
          <Input type="password" name="password" id="password" />
          <Button>Entrar</Button>
          <p className="mt-4">
            Ainda não possui uma conta?
            {' '}
            <Link
              href='/registro'
              className="text-emerald-500 hover:text-emerald-600 transition-colors"
            >
              Crie agora
            </Link>
          </p>
        </form>
      </div>
    </main>
  )
}