import styles from '../styles/module/rightSidebar.module.css';

const RightSidebar = () => {
  return (
    <div className={`${styles.sidebar} flex flex-col p-6`}>
      <div className="w-full profile mb-8 flex gap-4 items-center justify-start">
        <img src="/images/profile.jpeg" alt="Profile" className="rounded-full w-8 h-8" />
        <h4 className="text-white text-center">Ashutosh</h4>
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
