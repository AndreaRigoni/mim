include $(top_srcdir)/Common.mk


bin_PROGRAMS = client-publish client-discover

client_publish_SOURCES =  client_publish.c
client_publish_CFLAGS  =  $(AVAHI_CLIENT_CFLAGS)
client_publish_LDADD   =  $(AVAHI_CLIENT_LIBS)

client_discover_SOURCES =  client_discover.c
client_discover_CFLAGS  =  $(AVAHI_CLIENT_CFLAGS)
client_discover_LDADD   =  $(AVAHI_CLIENT_LIBS)
