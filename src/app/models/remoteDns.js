
/** 
 * Model de la classe RemoteDNS
 */
xport const RemoteDns = function (alias, name, groupId, groupName, siteReferer, domain) {
  this.name = name;
  this.alias = alias;
  this.state = "pending";
  this.groupName = groupName;
  this.groupId = groupId;
  this.siteReferer = siteReferer;
  this.domain = domain;

  return this;
}