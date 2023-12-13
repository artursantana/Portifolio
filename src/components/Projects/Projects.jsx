import '../Projects/project.scss'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Projects = () => {
  
    return (
      
        <div className='Swiper_container_central'>
          <h1>Project</h1>
          <Swiper 
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
          
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
          
            <SwiperSlide className='Swiper_container_components'>
          
              <img className='project container_project0' src="../src/assets/noprojects.png" alt="img" />
          
              <div className='container_text'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse dolorum praesentium, voluptatem ipsum quae laudantium rerum exercitationem saepe unde, aspernatur tenetur tempore facilis rem cumque dolor similique quia at nulla.
              </div>
            </SwiperSlide>
            <SwiperSlide className='Swiper_container_components'>
          
              <img className='project container_project0' src="../src/assets/noprojects.png" alt="img" />
          
              <div className='container_text'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse dolorum praesentium, voluptatem ipsum quae laudantium rerum exercitationem saepe unde, aspernatur tenetur tempore facilis rem cumque dolor similique quia at nulla.
              </div>
            </SwiperSlide>
            <SwiperSlide className='Swiper_container_components'>
          
              <img className='project container_project0' src="../src/assets/noprojects.png" alt="img" />
          
              <div className='container_text'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse dolorum praesentium, voluptatem ipsum quae laudantium rerum exercitationem saepe unde, aspernatur tenetur tempore facilis rem cumque dolor similique quia at nulla.
              </div>
            </SwiperSlide>
            <SwiperSlide className='Swiper_container_components'>
          
              <img className='project container_project0' src="../src/assets/noprojects.png" alt="img" />
          
              <div className='container_text'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse dolorum praesentium, voluptatem ipsum quae laudantium rerum exercitationem saepe unde, aspernatur tenetur tempore facilis rem cumque dolor similique quia at nulla.
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      );
}

export default Projects
