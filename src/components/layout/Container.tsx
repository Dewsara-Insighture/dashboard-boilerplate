interface ContainerProps {
  children: JSX.Element;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="flex flex-col items-center ">
      <div className="w-full max-w-[1280px] px-6">
        {children}
      </div>
    </div>
  );
}
