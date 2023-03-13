import ExampleImageComponent from './ExampleImage.vue'

// eslint-disable-next-line storybook/story-exports
export default {
  title: 'ExampleImageComponent',
  component: ExampleImageComponent
}

/*
 * With the default staticDirs config in .storybook/main.js {staticDirs: ["../public"]) this does not work
 * With the subdirectory change in .storybook/main.js {staticDirs: ["../public/assets/images"]) this does work
 */
export const WithImageStarter = {
  args: {
    asset: 'example.jpg',
    description: 'This is an example image'
  }
}

export const WithStarterImageRender = {
  render: () => ({
    components: { ExampleImageComponent },
    template:
      '<div><h1>From a render function</h1><example-image-component asset="example.jpg" description="This is an example image" /></div>'
  })
}

// This pattern is the opposite of the above
export const WithPathImage = {
  args: {
    asset: 'assets/images/example.jpg',
    description: 'This is an example image with a path'
  }
}
