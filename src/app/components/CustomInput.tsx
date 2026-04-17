import { Control, Controller, FieldValues, Path } from 'react-hook-form';

// Usamos Generics <T> para que TypeScript sepa qué campos tiene tu formulario
interface InputProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  type?: string;
  placeholder?: string;
}

export const CustomInput = <T extends FieldValues>({
  name,
  control,
  label,
  type = 'text',
  placeholder,
}: InputProps<T>) => {
  const isCheckbox = type === 'checkbox';

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <div className="mb-5 flex w-full flex-col">
          {' '}
          <div
            className={`flex ${isCheckbox ? 'flex-row items-center gap-3' : 'flex-col'}`}
          >
            {!isCheckbox && (
              <label className="mb-3 text-sm font-medium text-gray-700">
                {label}
              </label>
            )}

            <input
              {...field}
              {...(isCheckbox
                ? { checked: !!field.value }
                : { value: field.value ?? '' })}
              type={type}
              placeholder={placeholder}
              className={
                isCheckbox
                  ? 'h-5 w-5 cursor-pointer accent-[#FF9900]'
                  : `h-auto rounded-md border p-2 transition-all focus:ring-2 focus:outline-none ${
                      fieldState.error
                        ? 'border-red-500 focus:ring-red-200'
                        : 'border-gray-300 focus:ring-cyan-200'
                    }`
              }
            />

            {isCheckbox && (
              <label className="cursor-pointer text-sm font-medium text-gray-700">
                {label}
              </label>
            )}
          </div>
          {fieldState.error && (
            <span className="mt-1 block text-xs text-red-500">
              {fieldState.error.message}
            </span>
          )}
        </div>
      )}
    />
  );
};
