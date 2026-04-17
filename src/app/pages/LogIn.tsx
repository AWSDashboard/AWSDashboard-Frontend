import { SignInData, SignInSchema } from '../components/AuthValidator';
import { CustomInput } from '../components/CustomInput';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';









export default function LogIn() {
  const form = useForm<SignInData>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onsubmit = (data: SignInData) => {};
  return (
    <>
      <div className="flex h-full w-full flex-col items-center justify-center">
        <p>Introduzca sus credenciales de usuario.</p>
      </div>
      <div>
        <form
          className="mt-5 flex w-full flex-col items-start text-left"
          id="form-sigin"
          onSubmit={form.handleSubmit(onsubmit)}
        >
          <CustomInput
            name="email"
            label="Correo Electrónico"
            control={form.control}
            placeholder="ejemplo@correo.com"
          />
          <CustomInput
            name="password"
            label="Contraseña"
            control={form.control}
            placeholder="Contraseña"
          />
          <div className="mt-5 flex w-full justify-center">
            <Button
              type="submit"
              variant="contained"
              className="!hover:bg-[#232F3E] w-full rounded-lg !bg-[#FF9900] px-6 py-3 !text-black transition duration-200"
            >
              Iniciar sesión
            </Button>
          </div>
          <div className="mt-5">
            <p>
              ¿No tiene cuenta?
              <Link
                to="/auth/signup"
                className="font-medium text-[#0073BB] transition-colors hover:text-[#005a91] hover:underline"
              >
                {' '}
                Haz click aquí
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
