import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link
} from '@nextui-org/react';

export default function CustomCard() {
  return (
    <div>
      <Card >
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <p className="text-md">NextUI</p>
            <p className="text-small text-default-500">nextui.org</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>Make beautiful websites regardless of your design experience.</p>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link
            isExternal
            showAnchorIcon
            href="#"
          >
            Visit Source
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
