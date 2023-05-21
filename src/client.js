// import SanityClient from '@sanity/client'

// export default new SanityClient({
//     projectId: 'uwbd80zi',
//   dataset: 'production',
// })

// import SanityClient from '@sanity/client'
// export default new SanityClient({
//   projectId: 'uwbd80zi',
//   dataset: 'production',
// })

import {createClient} from '@sanity/client'


export default createClient({
  projectId: 'uwbd80zi',
  dataset: 'production'

})