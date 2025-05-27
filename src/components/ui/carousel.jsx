import { Carousel as ArkCarousel } from "@ark-ui/react/carousel"
// import { Carousel } from '@ark-ui/react/carousel'
import { chakra } from "@chakra-ui/react"

const CarouselRoot = chakra(ArkCarousel.Root, {
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  variants: {},
})

const CarouselItem = chakra(ArkCarousel.Item, {
  base: {
    width: "100%",
    height: "100%",
  },
})

const CarouselIndicatorGroup = chakra(ArkCarousel.IndicatorGroup, {
//   base: {
//     display: "flex",
//     gap: 2,
//   },
    base: {
        display: 'flex',
        gap: 3,
        width: 'fit-content',
        alignSelf: 'center',
    }
})

const CarouselIndicator = chakra(ArkCarousel.Indicator, {
    base: {
        width: '12px',
        height: '12px',
        bg: 'gray.300',
        borderRadius: 'full',
        _current: {
            bg: 'blue.400',
        }
    },

//   base: {
//     borderRadius: "full",
//     bg: "bg.subtle",
//     _selected: {
//       bg: "teal.solid",
//     },
//   },
//   variants: {
//     size: {
//       sm: {
//         width: 3,
//         height: 3,
//       },
//       md: {
//         width: 4,
//         height: 4,
//       },
//     },
//   },
})

const CarouselItemGroup = chakra(ArkCarousel.ItemGroup, {
  base: {
    display: "flex",
    gap: 2,
  },
})

const CarouselControl = chakra(ArkCarousel.Control, {
    base: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '4',
        borderRadius: 'lg',
        // boxShadow: 'lg',
        p: '4',
        mt: '4',
    }
})

export const Carousel = {
  Root: CarouselRoot,
  Control: CarouselControl,
  IndicatorGroup: CarouselIndicatorGroup,
  Indicator: CarouselIndicator,
  ItemGroup: CarouselItemGroup,
  Item: CarouselItem,
  NextTrigger: ArkCarousel.NextTrigger,
  PrevTrigger: ArkCarousel.PrevTrigger,
  AutoplayTrigger: ArkCarousel.AutoplayTrigger,
}


