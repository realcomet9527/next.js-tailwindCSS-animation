import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { AiOutlineDashboard } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { RootState } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";
import { AssignauthFalse } from "@/lib/store/slices/Authslice";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiReset } from "react-icons/bi";

const Sidebar = () => {
  const Router = useRouter();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(0);
  const msglength = useSelector((state: RootState) => state.auth.msglength);

  const handlelogout = () => {
    dispatch(AssignauthFalse());
    Router.push("/admin/auth");
  };

  const handleOpen = (value: any) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Card className="h-screen w-full overflow-auto max-w-[20rem] p-4 shadow-xl shadow-blue-gray-[900/5]">
      <div className="mb-2 flex items-center gap-4 p-4">
        <Typography className="text-black text-2xl cursor-pointer">
          Admin <span className="font-bold text-orange-500">Panel</span>
        </Typography>
      </div>
      <List>
        <Accordion
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 1 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 1}>
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="border-b-0 p-3"
            >
              <ListItemPrefix>
                <AiOutlineDashboard className="h-5 w-5" />
              </ListItemPrefix>
              <Typography className="mr-auto font-normal ml-[2px]">
                Home
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <Link href={"/admin/dashboard/logo"}>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Logo
                </ListItem>
              </Link>
              <Link href={"/admin/dashboard/section0"}>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Home Video Section
                </ListItem>
              </Link>
              <Link href={"/admin/dashboard/section1"}>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Section1
                </ListItem>
              </Link>
              <Link href={"/admin/dashboard/section2"}>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Section2
                </ListItem>
              </Link>
              <Link href={"/admin/dashboard/section3"}>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Section3
                </ListItem>
              </Link>
              <Link href={"/admin/dashboard/section4"}>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Section4
                </ListItem>
              </Link>
              <Link href={"/admin/dashboard/section5"}>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Section5
                </ListItem>
              </Link>
              <Link href={"/admin/dashboard/section6"}>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Section6
                </ListItem>
              </Link>
              <Link href={"/admin/dashboard/section7"}>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Section7
                </ListItem>
              </Link>
              <Link href={"/admin/dashboard/section8"}>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Section8
                </ListItem>
              </Link>
              <Link href={"/admin/dashboard/section9"}>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Section9
                </ListItem>
              </Link>
              <Link href={"/admin/dashboard/section10"}>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Section10
                </ListItem>
              </Link>
              <Link href={"/admin/dashboard/matadata"}>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Metadata
                </ListItem>
              </Link>
            </List>
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 2}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 1 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 2}>
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className="border-b-0 p-3"
            >
              <ListItemPrefix>
                <AiOutlineDashboard className="h-5 w-5" />
              </ListItemPrefix>
              <Typography className="mr-auto font-normal ml-[2px]">
                Our Values
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <Link href={"/admin/dashboard/values/valuepart1"}>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Section1
                </ListItem>
              </Link>
              <Link href={"/admin/dashboard/values/valuepart2"}>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Section2
                </ListItem>
              </Link>
              <Link href={"/admin/dashboard/values/valuepart3"}>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Section3
                </ListItem>
              </Link>
              <Link href={"/admin/dashboard/values/valuepart4"}>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Section4
                </ListItem>
              </Link>
              <Link href={"/admin/dashboard/values/valuepart5"}>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Section5
                </ListItem>
              </Link>
            </List>
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 3}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 1 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 3}>
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className="border-b-0 p-3"
            >
              <ListItemPrefix>
                <AiOutlineDashboard className="h-5 w-5" />
              </ListItemPrefix>
              <Typography className="mr-auto font-normal ml-[2px]">
                Our Services
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <Link href={"/admin/dashboard/services/service1"}>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Section1
                </ListItem>
              </Link>
              <Link href={"/admin/dashboard/services/service2"}>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Section2
                </ListItem>
              </Link>
              <Link href={"/admin/dashboard/services/service3"}>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Section3
                </ListItem>
              </Link>
              <Link href={"/admin/dashboard/services/service4"}>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Section4
                </ListItem>
              </Link>
              <Link href={"/admin/dashboard/services/service5"}>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Section5
                </ListItem>
              </Link>
              <Link href={"/admin/dashboard/services/service6"}>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Section6
                </ListItem>
              </Link>
              <Link href={"/admin/dashboard/services/service7"}>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Section7
                </ListItem>
              </Link>
              <Link href={"/admin/dashboard/services/service8"}>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Section8
                </ListItem>
              </Link>
            </List>
          </AccordionBody>
        </Accordion>




        <Link href={"/admin/dashboard/contact"}>
          <ListItem>
            <ListItemPrefix>
              <BsFillTelephoneFill className="h-5 w-5" />
            </ListItemPrefix>
            <span className="ml-[2px]">Contact</span>
          </ListItem>
        </Link>

        <Link href={"/admin/dashboard/resetpassword"}>
          <ListItem>
            <ListItemPrefix>
              <BiReset className="h-5 w-5" />
            </ListItemPrefix>
            <span className="ml-[2px]">Reset Password</span>
          </ListItem>
        </Link>


        <hr className="my-2 border-blue-gray-50" />

        <Link href={"/admin/dashboard/inbox"}>
          <ListItem>
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            <span className="ml-[2px]">Inbox</span>
            <ListItemSuffix>
              <Chip
                value={msglength}
                size="sm"
                variant="ghost"
                color="blue-gray"
                className="rounded-full"
              />
            </ListItemSuffix>
          </ListItem>
        </Link>
        <Link href={"/admin/dashboard/profile"}>
          <ListItem>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            <span className="ml-[2px]">Profile</span>
          </ListItem>
        </Link>
        <ListItem onClick={handlelogout}>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          <span className="ml-[2px]">Log Out</span>
        </ListItem>
      </List>
    </Card>
  );
};

export default Sidebar;
