import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';

@Component({
    props: {
        'model': Object
    }
})

export default class SuppliersComponent extends Vue {
    perPage: number = 5;
    currentPage: number = 1;
    filter: any = null;
    pageOptions: Array<any> = [{text: 5, value: 5}, {text: 10, value: 10}, {text: 15, value: 15}];

    @Prop()
    model: any;

    @Watch('model')
    onModelChanged(value: any, oldValue: any) {

    }

    get totalRows () {
        if (this.model)
            return this.model.pipelines.length;
        return 0;
    }
}
