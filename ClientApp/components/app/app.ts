import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import JcAPI from '../../Scripts/justconvey.js';
import Ext from '../../Scripts/extensions.js';

const ext  = new Ext();

@Component({
    components: {
        MenuComponent: require('../navmenu/navmenu.vue.html'),
    }
})
export default class AppComponent extends Vue {
    server: string ='http://localhost:5001/justconveyor/api/metrics';
    inFlight: string ='0s';
    started: Date = ext.dateToTZdate(new Date());
    updated: Date = ext.dateToTZdate(new Date());
    autoupdateFlag: boolean = false;
    autoupdateIntervalTimer: any = false;
    
    model: any = {
        blueprints: [],
        queues: [],
        pipelines: [],
        contexts: [],
        suppliers: [],
        loggers: []
    };
    
    
    loadMetrics(e: any) {
        if (e)
            e.preventDefault();
        const api = new JcAPI(this.server);
        api.getMetrics().then((result: any) => {
            this.inFlight = result.InFlightTime;
            this.started = ext.dateToTZdate(new Date(result.Started));
            this.updated = ext.dateToTZdate(new Date());
            
            this.model.blueprints = result.Blueprints;
            this.model.queues = result.Queues;
            this.model.contexts = result.Contextes;
            this.model.pipelines = result.Pipelines;
            this.model.suppliers = result.Suppliers;
            this.model.loggers = result.Loggers;
        }).catch((err: any) => {
            this.autoupdateFlag = false;
            this.autoupdateChanged();
        });
    };
    
    autoupdateChanged() {
        if (this.autoupdateFlag === true)
            this.autoupdateIntervalTimer = setInterval(this.loadMetrics, 5000);
        else
            clearInterval(this.autoupdateIntervalTimer)
    }
}
