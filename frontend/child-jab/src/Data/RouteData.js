
import NewCenter from "../page-components/NewCenter";
import ManageFeedback from "../page-components/ManageFeedback";
import ManageParents from "../page-components/ManageParents";
import ManageCenters from "../page-components/ManageCenters";
import NewParents from "../page-components/NewParents";
import NewChildren from "../page-components/NewChildren";
import ManageChildren from "../page-components/ManageChildren";
import NewFeedback from "../page-components/NewFeedback";
import NewCenterFacilities from "../page-components/NewCenterFacilities";
import CenterFacilities from "../page-components/CenterFacilities"
import ManageGallery from "../page-components/ManageGallery";
import NewGallery from "../page-components/NewGallery";
import ManageProfile from "../page-components/ManageProfile";



export const routes= [
{
    path:"/manage-centers",
    exact:"true",
    sidebar : () => <div>!</div>,
    main : () => <ManageCenters></ManageCenters>
},
{
    path:"/manage-parents",
    exact:"true",
    sidebar : () => <div>!</div>,
    main : () => <ManageParents></ManageParents>
},
{
    path:"/manage-children",
    exact:"true",
    sidebar : () => <div>!</div>,
    main : () => <ManageChildren></ManageChildren>
},
{
    path:"/manage-feedback",
    exact:"true",
    sidebar : () => <div>!</div>,
    main : () => <ManageFeedback></ManageFeedback>
},
{
    path:"/new-center",
    exact:"true",
    sidebar : () => <div>!</div>,
    main : () => <NewCenter></NewCenter>
},
{
    path:"/new-parents",
    exact:"true",
    sidebar : () => <div>!</div>,
    main : () => <NewParents></NewParents>
},
{
    path:"/new-children",
    exact:"true",
    sidebar : () => <div>!</div>,
    main : () => <NewChildren></NewChildren>
},
{
    path:"/new-feedback",
    exact:"true",
    sidebar : () => <div>!</div>,
    main : () => <NewFeedback></NewFeedback>
},
{
    path:"/manage-facility",
    exact:"true",
    sidebar : () => <div>!</div>,
    main : () => <CenterFacilities></CenterFacilities>
},
{
    path:"/new-centerfacility",
    exact:"true",
    sidebar : () => <div>!</div>,
    main : () => <NewCenterFacilities></NewCenterFacilities>
},
{
    path:"/manage-gallery",
    exact:"true",
    sidebar : () => <div>!</div>,
    main : () => <ManageGallery></ManageGallery>
},
{
    path:"/new-gallery",
    exact:"true",
    sidebar : () => <div>!</div>,
    main : () => <NewGallery></NewGallery>
},
{
    path:"/center-profile",
    exact:"true",
    sidebar : () => <div>!</div>,
    main : () => <ManageProfile></ManageProfile>
}



];