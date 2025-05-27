import { Image, Text, HStack, Button } from "@chakra-ui/react";

import { Carousel } from "@/components/ui/carousel"

import auto_2000 from '@/assets/img/showroom_car/auto_2000.png';
import bmw from '@/assets/img/showroom_car/bmw.png';
import proton from '@/assets/img/showroom_car/proton.png';

import acc_manado from '@/assets/img/acc/acc_manado.png';
import acc_riau from '@/assets/img/acc/acc_riau.png';
import { useState } from "react";

import convention_hall from '@/assets/img/convention_hall.png';

import bca_gadengan from '@/assets/img/bca/bca_gadengan.png';
import bca_gresik from '@/assets/img/bca/bca_gresik.png';

import wings_jakarta from '@/assets/img/wings_jakarta.png';

const ProjectsCard = () => {

    const car_showroom_img = [
        { key: auto_2000, value: 'Auto 2000' }, 
        { key: bmw, value: 'BMW' }, 
        { key: proton, value: 'Proton' }
    ]

    const acc_img = [
        { key: acc_manado, value: 'ACC (ASTRA CREDIT COMPANY), Manado' },
        { key: acc_riau, value: 'ACC (ASTRA CREDIT COMPANY), Riau' },
    ]

    const bca_img = [
        { key: bca_gadengan, value: 'BCA, Gadengan' },
        { key: bca_gresik, value: 'BCA, Gresik' },
    ]

    const other_img = [
        { key: convention_hall, value: 'MANADO GRAND PALACE CONVENTION HALL' },
        { key: wings_jakarta, value: 'Wings, Jakarta' },
    ]

    const [project, setProject] = useState(null);

    const CarouselGenerator = ( projects ) => {
        console.log(projects)
        return (
            <>
            <Carousel.Root defaultPage={0} slideCount={projects.length} autoplay loop>
                <Carousel.ItemGroup>
                    {projects.map((image, index) => (
                        <Carousel.Item key={index} index={index}>
                            {/* <img src={image} alt={`Slide ${index}`} /> */}
                            {/* <AspectRatio> */}
                                <Image 
                                    src={image.key} 
                                    alt={`Slide ${index}`} 
                                    h="500px"
                                    w="70%"
                                    objectFit="cover"
                                    mx='auto'
                                    borderRadius="lg"
                                />
                            {/* </AspectRatio> */}
                            <Text textAlign={'center'}>{image.value}</Text>
                        </Carousel.Item>
                    ))}
                </Carousel.ItemGroup>

                <Carousel.Control>
                    <Carousel.AutoplayTrigger>
                    </Carousel.AutoplayTrigger>

                    <Carousel.IndicatorGroup>
                        {projects.map((_, index) => (
                        <Carousel.Indicator key={index} index={index} />
                        ))}
                    </Carousel.IndicatorGroup>
                </Carousel.Control>
            </Carousel.Root>
            </>
        )
    }

    return (
        <>

        <HStack>
            <Button variant="outline" size="lg" onClick={() => setProject(CarouselGenerator( car_showroom_img ))}> Showroom </Button>
            <Button variant="outline" size="lg" onClick={() => setProject(CarouselGenerator( acc_img ))}> Astra Credit Company </Button>
            <Button variant="outline" size="lg" onClick={() => setProject(CarouselGenerator( bca_img ))}> BCA </Button>
            <Button variant="outline" size="lg" onClick={() => setProject(CarouselGenerator( other_img ))}> Others </Button>
        </HStack>

        {project}
    
        </>
    )
}

export default ProjectsCard