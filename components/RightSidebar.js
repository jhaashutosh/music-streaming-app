import styles from '../styles/module/rightSidebar.module.css';

const RightSidebar = () => {
  return (
    <div className={`${styles.sidebar} flex flex-col p-6`}>
      <div className="profile mb-8">
        <img src="/images/profile.png" alt="Profile" className="rounded-full" />
        <h4 className="text-white mt-2">Timothy Luca</h4>
      </div>
      <div className="recently-played">
        <h3 className="text-white">Recently Played</h3>
        <ul className="space-y-4 mt-4">
          <li className="flex justify-between text-gray-400">
            <span>好きだから。</span>
            <span>4 min ago</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RightSidebar;
