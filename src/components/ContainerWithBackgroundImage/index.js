import Image from 'next/image';

export default function ContainerWithBackgroundImage({ uri, urimobile, children }) {
  return (
    <div className='relative'>
      {urimobile && (
        <Image
          alt='Background Image'
          className='z-0 md:invisible'
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          quality={100}
          src={urimobile}
        />  
      )}
      <Image
        alt='Background Image'
        className={`z-0 ${urimobile ? 'invisible md:visible' : 'visible'}`}
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        quality={100}
        src={uri}
      />
      <div className='relative z-10'>
        {children}
      </div>
    </div>
  );
}
