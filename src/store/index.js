import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    state: {
        ballsClicked: 0,
        ballsTotal: 0,
        absCount: 0
    },
    mutations: {
        ballsClickedIncrement(state) {
            // изменяем состояние
            state.ballsClicked++;
        },
        ballsTotalIncrement(state) {
            state.ballsTotal++;
        },
        ballsTotalDecrement(state) {
            state.ballsTotal--;
        },
        absCountIncrement: (state) => state.absCount++
    }
})
