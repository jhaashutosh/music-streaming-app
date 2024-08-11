import styles from '../styles/module/leftSidebar.module.css';

const LeftSidebar = () => {
  return (
    <div className={`${styles.sidebar} flex flex-col p-6`}>
      <div className="logo mb-8">
        <img src="/images/logo.png" alt="Logo" />
      </div>
      <nav className="flex flex-col space-y-4">
        <a href="#" className="text-white">Home</a>
        <a href="#" className="text-gray-400">Discover</a>
        <a href="#" className="text-gray-400">Collections</a>
      </nav>
      <div className="mt-12">
        <h3 className="text-white">LIBRARY</h3>
        <nav className="flex flex-col space-y-4 mt-4">
          <a href="#" className="text-gray-400">Download</a>
          <a href="#" className="text-gray-400">Favourites</a>
          <a href="#" className="text-gray-400">Local Files</a>
        </nav>
      </div>
    </div>
  );
};

export default LeftSidebar;
