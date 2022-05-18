import Image from "next/image";

export const Loading = () => {
  return (
    <div>
      <Image src="/load.gif" width={50} height={50} />
    </div>
  );
};
