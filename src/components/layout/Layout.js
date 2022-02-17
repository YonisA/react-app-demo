import MainNav from "./MainNav";
import layoutStyles from "./Layout.module.css";

//responsible for rendering the content of the main page and
//stylizing it as well
//again using the built in children component which allows me to see the content of the main nav
function Layout(property) {
  return (
    <div>
      <MainNav />
      <main className={layoutStyles.main}>{property.children}</main>
    </div>
  );
}
export default Layout;
