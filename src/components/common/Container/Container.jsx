import css from './Container.module.scss';

const Container = ({ classNameProp, children }) => {
  return <div className={`${css.container} ${classNameProp}`}>{children}</div>;
};

export default Container;
