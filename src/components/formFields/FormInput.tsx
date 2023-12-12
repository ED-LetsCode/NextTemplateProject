// import { useFormContext } from "react-hook-form";

// import {
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Hint } from "@/components/Hint";

// interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
//   name: string;
//   label?: string;
//   showErrorMsg?: boolean;
//   hintDescription?: string;
// }

// const FormInput = ({
//   name,
//   label,
//   hintDescription,
//   showErrorMsg = true,
//   ...inputProps
// }: FormInputProps) => {
//   const { control } = useFormContext();

//   return (
//     <FormField
//       control={control}
//       name={name}
//       render={({ field }) => (
//         <FormItem>
//           <div className="flex gap-x-2">
//             {label && <FormLabel>{label}</FormLabel>}
//             {hintDescription && <Hint description={hintDescription} />}
//           </div>

//           <FormControl>
//             <Input {...field} {...inputProps} />
//           </FormControl>
//           {showErrorMsg && <FormMessage />}
//         </FormItem>
//       )}
//     />
//   );
// };

// export { FormInput };
