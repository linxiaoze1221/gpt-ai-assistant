import config from '../config/index.js';

const ja = {
  __ERROR_MISSING_ENV: (v) => `「${v}」環境変数が見つかりません。`,
  __COMMAND_ACTIVATE_LABEL: '自動応答をオンにする',
  __COMMAND_ACTIVATE_TEXT: '自動応答をオンにする',
  __COMMAND_ACTIVATE_REPLY: 'オンにしました',
  __COMMAND_ADVISE_LABEL: 'アドバイスをして',
  __COMMAND_ADVISE_TEXT: 'アドバイスをして',
  __COMMAND_ANALYZE_LABEL: '分析して',
  __COMMAND_ANALYZE_TEXT: '分析して',
  __COMMAND_BLAME_LABEL: '責めて',
  __COMMAND_BLAME_TEXT: '責めて',
  __COMMAND_COMPLAIN_LABEL: '愚痴を言って',
  __COMMAND_COMPLAIN_TEXT: '愚痴を言って',
  __COMMAND_DEACTIVATE_LABEL: '自動応答をオフにする',
  __COMMAND_DEACTIVATE_TEXT: '自動応答をオフにする',
  __COMMAND_DEACTIVATE_REPLY: 'オフにしました',
  __COMMAND_TALK_LABEL: '話して',
  __COMMAND_TALK_TEXT: '話して',
  __COMMAND_TALK_DEMO_LABEL: '話して',
  __COMMAND_TALK_DEMO_TEXT: '自分のことを話して',
  __COMMAND_CONFIGURE_LABEL: '設定',
  __COMMAND_CONFIGURE_TEXT: '設定',
  __COMMAND_CONFIGURE_REPLY: '設定しました',
  __COMMAND_COMFORT_LABEL: '慰めて',
  __COMMAND_COMFORT_TEXT: '慰めて',
  __COMMAND_COMMAND_LABEL: 'コマンド',
  __COMMAND_COMMAND_TEXT: 'コマンド',
  __COMMAND_CONTINUE_LABEL: '続いて',
  __COMMAND_CONTINUE_TEXT: '続いて',
  __COMMAND_DOC_LABEL: 'ドキュメンテーション',
  __COMMAND_DOC_TEXT: 'ドキュメンテーション',
  __COMMAND_DRAW_LABEL: '描いて',
  __COMMAND_DRAW_TEXT: '描いて',
  __COMMAND_DRAW_DEMO_LABEL: '描いて',
  __COMMAND_DRAW_DEMO_TEXT: '猫を描いて',
  __COMMAND_LAUGH_LABEL: '笑って',
  __COMMAND_LAUGH_TEXT: '笑って',
  __COMMAND_MISLEAD_LABEL: '誤解させて',
  __COMMAND_MISLEAD_TEXT: '誤解させて',
  __COMMAND_RESTART_LABEL: '再起動',
  __COMMAND_RESTART_TEXT: '再起動',
  __COMMAND_RESTART_REPLY: '再起動しています',
  __COMMAND_SUMMARIZE_LABEL: '要約して',
  __COMMAND_SUMMARIZE_TEXT: '要約して',
  __COMMAND_SUMMON_DEMO_LABEL: 'サモン',
  __COMMAND_SUMMON_DEMO_TEXT: `${config.SETTING_AI_NAME} 元気？`,
  __COMMAND_VERSION_LABEL: 'バージョン',
  __COMMAND_VERSION_TEXT: 'バージョン',
  __TEMPLATE_TITLE_COMMAND: 'コマンド',
  __COMPLETION_INIT_MESSAGE: 'こんにちは！',
  __COMPLETION_PROMPT_ADVISE: '以下の内容を要約し、いいアドバイスをください。',
  __COMPLETION_PROMPT_ANALYZE: '以下の内容を要約し、詳しく分析してください。',
  __COMPLETION_PROMPT_BLAME: '以下の内容を要約し、強く非難してください。',
  __COMPLETION_PROMPT_COMFORT: '以下の内容を要約し、暖かく慰めてください。',
  __COMPLETION_PROMPT_COMPLAIN: '以下の内容を要約し、軽く愚痴を言ってください。',
  __COMPLETION_PROMPT_LAUGH: '以下の内容を要約し、面白く笑ってください。',
  __COMPLETION_PROMPT_MISLEAD: '以下の内容を要約し、反対の事を言ってください。',
  __COMPLETION_PROMPT_SUMMARIZE: '以下の内容を要約し、ちゃんと説明してください。',
  __COMPLETION_PARTICIPANT_SOMEONE: 'ある人',
  __COMPLETION_QUOTATION_MARK_OPENING: '「',
  __COMPLETION_QUOTATION_MARK_CLOSING: '」',
};

export default ja;
