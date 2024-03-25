
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Tabs,
  Tab,
  Checkbox,
  Link,
  Input,
} from '@nextui-org/react';
import MailIcon from '../../assets/icons/MailIcon.svg';
import LockIcon from '../../assets/icons/LockIcon.svg';

export default function CustomPopup() {
 // const [popupType, setPopupType] = useState<string>('');
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  //const [isOpen , setIsOpen] = useState<boolean>(false);

//   const handlePopupTypeChange = (type: string) => {
//     setPopupType(type);
//   };

  return (
    <>
      <Button onPress={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
              <Tabs aria-label="Options">
                <Tab key="default" title="Default">
                  
                   
                    <p>
                      Magna exercitation reprehenderit magna aute tempor
                      cupidatat consequat elit dolor adipisicing. Mollit dolor
                      eiusmod sunt ex incididunt cillum quis. Velit duis sit
                      officia eiusmod Lorem aliqua enim laboris do dolor
                      eiusmod. Et mollit incididunt nisi consectetur esse
                      laborum eiusmod pariatur proident Lorem eiusmod et. Culpa
                      deserunt nostrud ad veniam.
                    </p>
                  
                </Tab>
                <Tab key="form" title="Form">
                  
                    <Input
                      autoFocus
                      endContent={
                        <img src={MailIcon} alt='mail' className='h-4 w-4'/>
                        // <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                      }
                      label="Email"
                      placeholder="Enter your email"
                      variant="bordered"
                      className='mb-4'
                    />
                    <Input
                      endContent={
                        <img src={LockIcon} alt='lock'className='h-4 w-4'/>
                        // <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                      }
                      label="Password"
                      placeholder="Enter your password"
                      type="password"
                      variant="bordered"
                    />
                    <div className="flex py-2 px-1 justify-between">
                      <Checkbox
                        classNames={{
                          label: 'text-small',
                        }}
                      >
                        Remember me
                      </Checkbox>
                      <Link color="primary" href="#" size="sm">
                        Forgot password?
                      </Link>
                    </div>
                  
                </Tab>
              </Tabs>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
