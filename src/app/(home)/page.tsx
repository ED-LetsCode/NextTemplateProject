import { Icons } from "@/components/Icons";

const Page = async () => {
  return (
    <div className="flex h-full flex-col items-center justify-center space-y-8">
      <Icons.camera className="h-10" />
      <p className=" text-[20px]">Template Project</p>
    </div>
  );
};

export default Page;
