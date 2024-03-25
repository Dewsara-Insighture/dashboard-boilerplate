import { Spinner } from '@nextui-org/react';

interface Props {
  color?: 'current' | 'white' | 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | undefined;
  size?:'sm' | 'md' | 'lg' | undefined;
  label?:string;
  labelColor? : 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'foreground' | undefined;
}

export default function CustomSpinner({color , size , label , labelColor} :Props) {
  return (
    <>
      <Spinner color={color} size={size} label={label} labelColor={labelColor}/>
    </>
  );
}
        