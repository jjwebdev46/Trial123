import { Card, Image, AspectRatio, Text } from "@chakra-ui/react";
import heavy_industrial from '@/assets/img/heavy_industrial.png'
import sawmill_storage_industrial from '@/assets/img/sawmill--storage_industrial.png'
import private_house from '@/assets/img/private_house.png'
import interior from '@/assets/img/interior.png'
import land_clearing from '@/assets/img/land_clearing--cut_and_fill--layer_foundation.png'

const ServicesCard = () => {
    const cardGenerator = ({imgPath, imgDesc}) => {
        return (
            <>
            <Card.Root maxW="sm" overflow="hidden">
                <AspectRatio>
                    <Image
                        src={imgPath}
                        alt=""
                        h="full"
                        w="full"
                        objectFit="cover"
                        mx='auto'
                    />
                </AspectRatio>

                <Card.Body gap="2">
                    <Card.Description fontSize={15}>
                        {/* <Text fontSize={15}>
                            {imgDesc}
                        </Text> */}
                        {imgDesc}
                    </Card.Description>
                </Card.Body>
            </Card.Root>
            </>
        )
    }

    return (
        <>
        {cardGenerator({
            imgPath: heavy_industrial,
            imgDesc: 'Heavy Industrial',
        })}
        {cardGenerator({
            imgPath: sawmill_storage_industrial,
            imgDesc: 'Sawmill & Storage Industrial',
        })}
        {cardGenerator({
            imgPath: private_house,
            imgDesc: 'Private House & Real Estate, Meeting Hall',
        })}
        {cardGenerator({
            imgPath: interior,
            imgDesc: 'Interior',
        })}
        {cardGenerator({
            imgPath: land_clearing,
            imgDesc: 'Land Clearing, Cut & Fill, Layer Foundation',
        })}
        </>
    )
}

export default ServicesCard