// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { Icons } from "@/components/Icons";

// interface HintProps {
//   description: string;
//   side?: "left" | "right" | "top" | "bottom";
//   sideOffset?: number;
// }

// export const Hint = ({
//   description,
//   side = "top",
//   sideOffset = 6,
// }: HintProps) => {
//   return (
//     <Popover>
//       <PopoverTrigger asChild className=" cursor-pointer ">
//         <Icons.info className="h-4 w-4" />
//       </PopoverTrigger>
//       <PopoverContent
//         sideOffset={sideOffset}
//         side={side}
//         className="max-w-[500px] break-words text-sm"
//       >
//         {description}
//       </PopoverContent>
//     </Popover>
//   );
// };
