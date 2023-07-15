import { useIntersectionObserver } from '@vueuse/core'
export const lazyLoadPlugin = {
    install: (app, options) => {
        /**
         * Global directives
         */
        app.directive('img-lazy', {
            // called when the bound element's parent component
            // and all its children are mounted.
            /**
             * 
             * @param {*} el the element the directive is bound to. This can be used to directly manipulate the DOM.
             * @param {*} binding an object containing the following properties.
             * @param {*} vnode the underlying VNode representing the bound element.
             * @param {*} prevVnode the VNode representing the bound element from the previous render. Only available in the beforeUpdate and updated hooks.
             */
            mounted(el, binding, vnode, prevVnode) {
                console.log(`lazy el ==> `, el)
                console.log(`lazy binding ==> `, binding)
                const { stop } = useIntersectionObserver(
                    el,
                    ([{ isIntersecting }], observerElement) => {
                        if (isIntersecting) {
                            /**
                             * 处于视图区域
                             */
                            el.src = binding.value
                            stop()
                        }
                    },
                )

            },
        })
    }
}