import classNames from 'classnames'
import React, { useMemo } from 'react'
import { IoMdQuote } from 'react-icons/io'
import images from '~/assets'

interface IItemBannerCustomerReaction {
  img: string
  content: string
  className: string
  idx: number
  classIcon: string
  classWrapContent: string
}
const ItemBannerCustomerReaction = ({
  img,
  content,
  className,
  idx,
  classIcon,
  classWrapContent
}: IItemBannerCustomerReaction) => {
  const isOdd = idx % 2 === 0
  console.log('isOdd', isOdd)
  return (
    <React.Fragment>
      <div className={classNames('w-full', 'md:h-1/3')}>
        <div className={classNames('flex h-full items-center gap-5', className)}>
          <div
            className={classNames(
              'aspect-square size-[90px] shrink-0 overflow-hidden rounded-full',
              'md:h-2/3 md:w-auto'
            )}
          >
            <img src={img} className='h-full object-cover' alt='' />
          </div>
          <div className={classNames('relative flex h-full flex-1 items-center rounded-[18px] p-4', classWrapContent)}>
            <p
              className={classNames(
                'line-clamp-4 max-w-[300px] text-[12px]/[14px]',
                'leading-[1.3] md:max-w-[500px] md:text-[18px]'
              )}
            >
              {content}
            </p>
            <IoMdQuote className={classNames('absolute text-[28px]', classIcon, 'md:text-[20px]', 'lg:text-[40px]')} />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

const ListBannerCustomerReaction = () => {
  const reactionData = useMemo(
    () => [
      {
        img: images.image.user1,
        content:
          'Wow, this AI solution could revolutionize how we understand our in-store customers. I’m definitely interested.',
        className: '',
        classIcon: 'right-[2%] top-[8%] text-[#D3E1E4]',
        classWrapContent: 'bg-[#C6DDDEA3] pr-8'
      },
      {
        img: images.image.user2,
        content:
          'This technology is really impressive. Using AI to improve our understanding of in-store customers will help us serve them better.',
        className: 'bg-[#9FB9C2A3] rounded-[18px] rounded-br-[48px] flex-row-reverse !items-end',
        classIcon: classNames('top-0 translate-y-[-50%] left-4 rotate-[180deg] text-[#D3E1E4]'),
        classWrapContent: ''
      },
      {
        img: images.image.user3,
        content:
          'This is truly a major leap forward. An AI tool that provides better customer understanding would be a significant competitive advantage.',
        className: '',
        classIcon: 'right-[2%] bottom-[8%] text-black',
        classWrapContent: 'bg-[#E3E5E9] pr-8'
      }
    ],
    []
  )

  return (
    <React.Fragment>
      <div className={classNames('flex h-full w-full flex-col justify-center gap-3 p-5', 'md:p-0')}>
        {reactionData.map((item, i) => (
          <ItemBannerCustomerReaction key={i} {...item} idx={i} />
        ))}
      </div>
    </React.Fragment>
  )
}

export default React.memo(ListBannerCustomerReaction)
