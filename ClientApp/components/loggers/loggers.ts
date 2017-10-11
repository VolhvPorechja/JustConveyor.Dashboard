import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';

@Component({
    props: {
        'model': Object
    }
})

export default class LoggersComponent extends Vue {
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
            return this.model.loggers.length;
        return 0;
    };
    
    fields: Array<any> = [{
        key: 'Name', sortable: true, class: 'w-25'
    },{
        key: 'FilePath', sortable: true, class: 'w-100'
    }]
}
