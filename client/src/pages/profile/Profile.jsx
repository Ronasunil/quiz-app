import Badge from "../../components/Badge";
import Wrapper from "../../components/Wrapper";
import { GoTrophy } from "react-icons/go";
import { LuMedal } from "react-icons/lu";
import { TiStopwatch } from "react-icons/ti";
import Button from "../../components/Button";

function Profile() {
  return (
    <Wrapper sectionHeading="Profile" sectionDescription="View your profile.">
      <div className="max-w-xl w-full p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
        <img
          src="https://i.ibb.co/0jhT2pzb/default-icon.webp"
          alt=""
          className="w-32 h-32 mx-auto rounded-full"
        />
        <div className="space-y-4 text-center divide-y dark:divide-gray-300">
          <div className="my-2 space-y-1">
            <h2 className="text-xl font-semibold sm:text-2xl">Leroy Jenkins</h2>
            <p className="px-5 text-xs sm:text-base dark:text-gray-600">User</p>
          </div>

          <div className="grid grid-cols-3 py-1">
            <div className=" flex col-start-2 grid-cols-2 justify-items-end  justify-center pt-2 space-x-4 align-center">
              <Badge>
                <GoTrophy />
                <span>1</span>
              </Badge>

              <Badge>
                <LuMedal />
                <span>1</span>
              </Badge>

              <Badge>
                <TiStopwatch />
                <span>2</span>
              </Badge>
            </div>
            <div className="flex items-center justify-center">
              <Button type="profileSaveBtn">Save</Button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Profile;
