import PropTypes from 'prop-types';
import forwardArrowIcon from '../../assets/images/icons/forwardArrowIcon.svg';

function DisplayCardInformation ({
  title,
  description,
  showViewMore,
  showMore,
  showIcon,
  cardIcon,
  type
}) {
  const cardStyles = {
    info: 'text-indigo-700',
    warning: 'text-black'
  };

  return (
    <div className='w-full px-5 pb-5 pt-0 mb-1'>
      <div>
        <div className={`${cardStyles[type]} flex text-lg font-bold`}>
          {showIcon && <img className='pr-3' src={cardIcon} />}
          <h1>{title}</h1>
        </div>
        <div className='text-sm'>
          <p className='whitespace-pre-line py-3'>{description}</p>
        </div>
      </div>
      {showViewMore && (
        <div className='flex flex-row justify-end items-center text-sm mb-5'>
          <p data-testid='show-more'>{showMore}</p>
          <img className='pl-1' src={forwardArrowIcon} alt='icon-next' />
        </div>
      )}
      <hr className='divide-solid bg-gray-200 h-1' />
    </div>
  );
}

DisplayCardInformation.defaultProps = {
  showViewMore: false,
  showIcon: false
};

DisplayCardInformation.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  showViewMore: PropTypes.bool,
  showMore: PropTypes.string,
  showIcon: PropTypes.bool,
  cardIcon: PropTypes.string,
  type: PropTypes.string.isRequired
};

export default DisplayCardInformation;
