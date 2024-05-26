import classes from './TopicLoading.module.css';

const TopicLoading = () => {
  return (
    <div className="flex justify-between items-center bg-slate-900 text-white rounded m-auto max-w-xl"    >
      <div className={classes.loader}>
        <div className={classes.loaderBar}></div>
      </div>
    </div>
  );
};

export default TopicLoading;
