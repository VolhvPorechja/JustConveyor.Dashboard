import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
    props: {
        'blueprintsCount': Number,
        'pipelinesCount': Number,
        'queuesCount': Number,
        'contextsCount': Number,
        'suppliersCount': Number,
        'loggersCount': Number
    }
})
export default class NavMenu extends Vue {
}
