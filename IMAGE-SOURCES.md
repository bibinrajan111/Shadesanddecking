# Illustrative image source register

The site currently uses illustrative Unsplash-hosted photography, not Shades and Decking NZ project photography. Each source is an `images.unsplash.com` asset selected for residential outdoor/architectural visual context and is used under the [Unsplash License](https://unsplash.com/license). Replace these with owned, approved project photography before launch.

| Asset | Used for | Source |
| --- | --- | --- |
| `outdoor` | Home hero, outdoor living and editorial sections | `https://images.unsplash.com/photo-1600607687939-ce8a6c25118c` |
| `pergola` | Pergola/shade service imagery | `https://images.unsplash.com/photo-1600585154340-be6161a56a0c` |
| `decking` | Decking imagery | `https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea` |
| `screens` | Privacy-screen/fencing imagery | `https://images.unsplash.com/photo-1600210492486-724fe5c67fb0` |
| `design` | Design-and-build imagery | `https://images.unsplash.com/photo-1600607687920-4e2a09cf159d` |
| `custom` | Custom-feature imagery | `https://images.unsplash.com/photo-1600585152915-d208bec867a1` |

Assets are requested at a capped 1600px width with automatic format selection and quality 82. The hero is eager/high priority; other `ProjectPlaceholder` uses lazy loading. Service cards already use browser lazy loading through `ImageFrame`.
