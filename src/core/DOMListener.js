import { getMethodName } from './utils'

export class DOMListener {
    constructor($root, listeners = []) {
        if (!$root) {
            throw new Error('No root provided DOMListener')
        }
        this.$root = $root
        this.listeners = listeners
    }

    addDOMListeners() {
        this.listeners.forEach(listener => {
            const method = getMethodName(listener)
            try {
                this[method] = this[method].bind(this)
                this.$root.on(listener, this[method])
            } catch (error) {
                const name = this.name || name
                throw new Error(`Method ${method} is not`
                    + `implemented in ${name} Component `)
            }
        })
    }

    removeDOMListeners() {
        this.listeners.forEach(listener => {
            const method = getMethodName(listener)
            this.$root.remove(listener, this[method])
        })
    }
}
