'use strict'
let helpers = require('./helpers');

exports = {

  events: [
    { event: 'onTicketCreate', callback: 'onTicketCreateHandler' }
  ],

  // args is a JSON block containing the payload information.
  // args['iparam'] will contain the installation parameter values.
  onTicketCreateHandler: function(args) {
    let apiKey = args.iparams.apiKey;
    let ticketId = args.data.ticket.id;
    let ticketContent = args.data.ticket.description_text;    

    let kr_words_str = args.iparams.words_KR;
    let kr_words_arr = kr_words_str.split(' ');

    let cn_words_str = args.iparams.words_CN;
    let cn_words_arr = cn_words_str.split(' ');

    let de_words_str = args.iparams.words_DE;
    let de_words_arr = de_words_str.split(' ');

    let fr_words_str = args.iparams.words_FR;
    let fr_words_arr = fr_words_str.split(' ');

    let pt_words_str = args.iparams.words_PT;
    let pt_words_arr = pt_words_str.split(' ');

    let es_words_str = args.iparams.words_ES;
    let es_words_arr = es_words_str.split(' ');

    let ru_words_str = args.iparams.words_RU;
    let ru_words_arr = ru_words_str.split(' ');

    let it_words_str = args.iparams.words_IT;
    let it_words_arr = it_words_str.split(' ');

    let nl_words_str = args.iparams.words_NL;
    let nl_words_arr = nl_words_str.split(' ');

    let jp_words_str = args.iparams.words_JP;
    let jp_words_arr = jp_words_str.split(' ');

    if (helpers.check(kr_words_arr, ticketContent) && kr_words_str !== '') {      
      helpers.setBucket("SupportKR", ticketId, apiKey);
    } else if (helpers.check(cn_words_arr, ticketContent) && cn_words_str !== '') {      
      helpers.setBucket("SupportCN", ticketId, apiKey);
    } else if (helpers.check(de_words_arr, ticketContent) && de_words_str !== '') {
      helpers.setBucket("SupportDE", ticketId, apiKey);
    } else if (helpers.check(fr_words_arr, ticketContent) && fr_words_str !== '') {
      helpers.setBucket("SupportFR", ticketId, apiKey);
    } else if (helpers.check(es_words_arr, ticketContent) && es_words_str !== '') {
      helpers.setBucket("SupportES", ticketId, apiKey);
    } else if (helpers.check(pt_words_arr, ticketContent) && pt_words_str !== '') {      
      helpers.setBucket("SupportPT", ticketId, apiKey);
    } else if (helpers.check(it_words_arr, ticketContent) && it_words_str !== '') {      
      helpers.setBucket("SupportIT", ticketId, apiKey);
    } else if (helpers.check(ru_words_arr, ticketContent) && ru_words_str !== '') {      
      helpers.setBucket("SupportRU", ticketId, apiKey);
    } else if (helpers.check(jp_words_arr, ticketContent) && jp_words_str !== '') {      
      helpers.setBucket("SupportJP", ticketId, apiKey);
    } else if (helpers.check(nl_words_arr, ticketContent) && nl_words_str !== '') {      
      helpers.setBucket("SupportNL", ticketId, apiKey);
    }
  }
};