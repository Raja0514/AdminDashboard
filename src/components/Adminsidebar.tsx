import { IconType } from "react-icons";
import { RiDashboard2Fill, RiShoppingBag3Fill,RiCoupon3Fill } from "react-icons/ri";
import { Link, useLocation, Location } from "react-router-dom";
import { AiFillFileText } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import {FaChartBar,FaChartPie,FaChartLine,FaStopwatch,FaGamepad} from 'react-icons/fa'


const Adminsidebar = () => {
  const location = useLocation();

  return (
    <aside>
      <h2>Logo</h2>
      
        <Divone location={location} />
        <DivTwo location={location} />
        <DivThree location={location}/>
    
    </aside>
  );
};

export default Adminsidebar;




interface Liprops {
  url: string;
  text: string;
  location: Location;
  Icon: IconType;
}

const Li = ({ url, text, location, Icon }: Liprops) => (
  <li
    style={{
      backgroundColor: location.pathname.includes(url)
        ? "rgba(0,115,255,0.1)"
        : "white",
    }}
  >
    <Link
      to={url}
      style={{
        color: location.pathname.includes(url) ? "rgba(0,115,255)" : "black",
      }}
    >
      <Icon />
      {text}
    </Link>
  </li>
);

const Divone = ({ location }: { location: Location }) => (
  <div>
    <h5>Dashboard</h5>

    <ul>
      <Li
        url="/admin/dashboard"
        Icon={RiDashboard2Fill}
        location={location}
        text="Dashboard"
      />

      <Li
        url="/admin/product"
        Icon={RiShoppingBag3Fill}
        location={location}
        text="Product"
      />

      <Li
        url="/admin/customer"
        Icon={IoIosPeople}
        location={location}
        text="Customer"
      />

      <Li
        url="/admin/transcation"
        Icon={AiFillFileText}
        location={location}
        text="Transactions"
      />
    </ul>
  </div>
);

const DivTwo = ({ location }: { location: Location }) => (
  <div>
    <h5>charts</h5>

    <ul>
      <Li
        url="/admin/chart/bar"
        Icon={FaChartBar}
        location={location}
        text="Bar"
      />

      <Li
        url="/admin/chart/pie"
        Icon={FaChartPie}
        location={location}
        text="Pie"
      />

      <Li
        url="/admin/chart/line"
        Icon={FaChartLine}
        location={location}
        text="Line"
      />

      
    </ul>
  </div>
);


const DivThree = ({ location }: { location: Location }) => (
  <div>
    <h5>apps</h5>

    <ul>
      <Li
        url="/admin/app/stopwatch"
        Icon={FaStopwatch}
        location={location}
        text="Stopwatch"
      />

      <Li
        url="/admin/app/coupon"
        Icon={RiCoupon3Fill}
        location={location}
        text="Coupon"
      />

      <Li
        url="/admin/app/toss"
        Icon={FaGamepad}
        location={location}
        text="Toss"
      />

    </ul>
  </div>
);



