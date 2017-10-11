import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';

@Component({
    props: {
        'model': Object
    }
})
export default class PipelinesComponent extends Vue {
    perPage: number = 5;
    currentPage: number = 1;
    filter: any = null;
    pageOptions: Array<any> = [{text: 5, value: 5}, {text: 10, value: 10}, {text: 15, value: 15}];
    fields: Array<any> = [{
        key: 'Id', sortable: true, class: 'w-100'
    },{
        key: 'State', sortable: true, class: 'w-25'
    }];

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

    onFiltered(filteredItems: Array<any>) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.currentPage = 1;
    }
}
