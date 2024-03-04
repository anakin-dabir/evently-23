import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import AccountDrawer from "../AccountDrawer/AccountDrawer";
import { TfiFlickrAlt } from "react-icons/tfi";
import useLocationStore from "../../store/useLocation.js";
import Locator from "../Locator/Locator";
import SearchBar from "../Searchbar";
import useAuthStore from "../../store/authStore";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const { region, selectRegion } = useLocationStore();
  const { user } = useAuthStore();

  return (
    <>
      {pathname.includes("/account/ads/") ? (
        <div className="bg-white py-4 px-40 flex items-center justify-center border-b-2 mb-5">
          <Link to={"/"} className="flex gap-2.5 items-center justify-center">
            <svg
              height="34px"
              width="34px"
              viewBox="0 0 36 36"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="iconify iconify--twemoji"
              preserveAspectRatio="xMidYMid meet"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="#E0E7EC"
                  d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v23z"
                ></path>
                <path
                  d="M23.657 19.12H17.87c-1.22 0-1.673-.791-1.673-1.56c0-.791.429-1.56 1.673-1.56h8.184c1.154 0 1.628 1.04 1.628 1.628c0 .452-.249.927-.52 1.492l-5.607 11.395c-.633 1.266-.882 1.717-1.899 1.717c-1.244 0-1.877-.949-1.877-1.605c0-.271.068-.474.226-.791l5.652-10.716zM10.889 19h-.5c-1.085 0-1.538-.731-1.538-1.5c0-.792.565-1.5 1.538-1.5h2.015c.972 0 1.515.701 1.515 1.605V30.47c0 1.13-.558 1.763-1.53 1.763s-1.5-.633-1.5-1.763V19z"
                  fill="#66757F"
                ></path>
                <path
                  fill="#6d28d9"
                  d="M34 0h-3.277c.172.295.277.634.277 1a2 2 0 0 1-4 0c0-.366.105-.705.277-1H8.723C8.895.295 9 .634 9 1a2 2 0 0 1-4 0c0-.366.105-.705.277-1H2a2 2 0 0 0-2 2v11h36V2a2 2 0 0 0-2-2z"
                ></path>
                <path
                  d="M13.182 4.604c0-.5.32-.78.75-.78c.429 0 .749.28.749.78v5.017h1.779c.51 0 .73.38.72.72a.7.7 0 0 1-.72.659h-2.498c-.49 0-.78-.319-.78-.819V4.604zm-6.91 0c0-.5.32-.78.75-.78s.75.28.75.78v3.488c0 .92.589 1.649 1.539 1.649c.909 0 1.529-.769 1.529-1.649V4.604c0-.5.319-.78.749-.78s.75.28.75.78v3.568c0 1.679-1.38 2.949-3.028 2.949c-1.669 0-3.039-1.25-3.039-2.949V4.604zM5.49 9.001c0 1.679-1.069 2.119-1.979 2.119c-.689 0-1.839-.27-1.839-1.14c0-.269.23-.609.56-.609c.4 0 .75.37 1.199.37c.56 0 .56-.52.56-.84V4.604c0-.5.32-.78.749-.78c.431 0 .75.28.75.78v4.397z"
                  fill="#F5F8FA"
                ></path>
                <path
                  d="M32 10a1 1 0 1 0 2 0a1 1 0 0 0-2 0m0-3a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-3 3a1 1 0 1 0 2 0a1 1 0 0 0-2 0m0-3a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-3 3a1 1 0 1 0 2 0a1 1 0 0 0-2 0m0-3a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-3 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0m0 3a1 1 0 1 0 2 0a1 1 0 0 0-2 0"
                  fill="#F4ABBA"
                ></path>
              </g>
            </svg>
            <span className="font-semibold  md:text-xl ml-1 text-lg whitespace-nowrap">
              Evently
            </span>
          </Link>
        </div>
      ) : (
        <div>
          <div className="bg-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 pt-2 shadow-md">
            <header className="flex sm:pb-0 pb-3 justify-between bg-white items-center gap-3 ">
              <Link to={"/"} className="flex gap-2.5 items-center justify-center md:mb-2 sm:mb-0">
                <svg
                  height="34px"
                  width="34px"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  class="iconify iconify--twemoji"
                  preserveAspectRatio="xMidYMid meet"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      fill="#E0E7EC"
                      d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v23z"
                    ></path>
                    <path
                      d="M23.657 19.12H17.87c-1.22 0-1.673-.791-1.673-1.56c0-.791.429-1.56 1.673-1.56h8.184c1.154 0 1.628 1.04 1.628 1.628c0 .452-.249.927-.52 1.492l-5.607 11.395c-.633 1.266-.882 1.717-1.899 1.717c-1.244 0-1.877-.949-1.877-1.605c0-.271.068-.474.226-.791l5.652-10.716zM10.889 19h-.5c-1.085 0-1.538-.731-1.538-1.5c0-.792.565-1.5 1.538-1.5h2.015c.972 0 1.515.701 1.515 1.605V30.47c0 1.13-.558 1.763-1.53 1.763s-1.5-.633-1.5-1.763V19z"
                      fill="#66757F"
                    ></path>
                    <path
                      fill="#6d28d9"
                      d="M34 0h-3.277c.172.295.277.634.277 1a2 2 0 0 1-4 0c0-.366.105-.705.277-1H8.723C8.895.295 9 .634 9 1a2 2 0 0 1-4 0c0-.366.105-.705.277-1H2a2 2 0 0 0-2 2v11h36V2a2 2 0 0 0-2-2z"
                    ></path>
                    <path
                      d="M13.182 4.604c0-.5.32-.78.75-.78c.429 0 .749.28.749.78v5.017h1.779c.51 0 .73.38.72.72a.7.7 0 0 1-.72.659h-2.498c-.49 0-.78-.319-.78-.819V4.604zm-6.91 0c0-.5.32-.78.75-.78s.75.28.75.78v3.488c0 .92.589 1.649 1.539 1.649c.909 0 1.529-.769 1.529-1.649V4.604c0-.5.319-.78.749-.78s.75.28.75.78v3.568c0 1.679-1.38 2.949-3.028 2.949c-1.669 0-3.039-1.25-3.039-2.949V4.604zM5.49 9.001c0 1.679-1.069 2.119-1.979 2.119c-.689 0-1.839-.27-1.839-1.14c0-.269.23-.609.56-.609c.4 0 .75.37 1.199.37c.56 0 .56-.52.56-.84V4.604c0-.5.32-.78.749-.78c.431 0 .75.28.75.78v4.397z"
                      fill="#F5F8FA"
                    ></path>
                    <path
                      d="M32 10a1 1 0 1 0 2 0a1 1 0 0 0-2 0m0-3a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-3 3a1 1 0 1 0 2 0a1 1 0 0 0-2 0m0-3a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-3 3a1 1 0 1 0 2 0a1 1 0 0 0-2 0m0-3a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-3 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0m0 3a1 1 0 1 0 2 0a1 1 0 0 0-2 0"
                      fill="#F4ABBA"
                    ></path>
                  </g>
                </svg>
                <span className="font-semibold md:block mt-auto text-[#6d28d9] hidden text-xl">
                  Evently
                </span>
              </Link>
              <div className="md:flex hidden mb-2 sm:mb-0">
                <Locator
                  initialValue={region}
                  selectRegion={selectRegion}
                  placeholder="Events in Pakistan"
                />
              </div>
              <SearchBar />
              {user ? (
                <Link
                  className="cursor-pointer whitespace-nowrap bg-violet-600 p-2 rounded-md text-white md:block hidden mb-2 sm:mb-0"
                  to={"/create"}
                >
                  Create an Event
                </Link>
              ) : (
                <div
                  onClick={() => {
                    navigate("/login");
                  }}
                  className="cursor-pointer whitespace-nowrap bg-violet-600 p-2 rounded-md text-white md:block hidden mb-2 sm:mb-0"
                >
                  Create an Event
                </div>
              )}

              <div className="flex items-center gap-3">
                {user ? (
                  <div className="flex">
                    <AccountDrawer />
                  </div>
                ) : (
                  <div
                    onClick={() => {
                      navigate("/login");
                    }}
                    className="md:flex hidden items-center gap-2 border border-gray-300 rounded-full py-2 my-2.5 px-4 cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                    <div className="bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 relative top-1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </header>
          </div>
        </div>
      )}
    </>
  );
}
