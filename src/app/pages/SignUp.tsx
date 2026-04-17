import { SignUpData, SignUpSchema } from '../components/AuthValidator';
import { CustomInput } from '../components/CustomInput';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';









export default function SignUp() {
  const form = useForm<SignUpData>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      userName: '',
      email: '',
      password: '',
      repeatPassword: '',
      acceptedTerms: false,
    },
  });

  const onsubmit = (data: SignUpData) => {};
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
            name="userName"
            label="Nombre de usuario"
            control={form.control}
            placeholder="ejemplo_123"
          />
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
          <CustomInput
            name="repeatPassword"
            label="Repita contraseña"
            control={form.control}
            placeholder="Repita contraseña"
          />
          <CustomInput
            name="acceptedTerms"
            label="Términos y condiciones"
            control={form.control}
            type="checkbox"
          />
          <div className="mt-5 flex w-full justify-center">
            <Button
              type="submit"
              variant="contained"
              className="!hover:bg-[#232F3E] w-full rounded-lg !bg-[#FF9900] px-6 py-3 !text-black transition duration-200"
            >
              Crear usuario
            </Button>
          </div>
          <div className="mt-5">
            <p>
              ¿Ya tiene cuenta?
              <Link
                to="/auth/login"
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
